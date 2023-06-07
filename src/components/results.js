import React, { useState, useEffect } from 'react';
import data from '../data.json'
import Popup from 'reactjs-popup';

function Results() {

  // usestate funtions
  const [status, setStatus] = useState('')
  const [filteredData, setFilteredData] = useState([]);
  const [sortBy, setSortBy] = useState('');

  // setting status of orders
  const confirmed = (status) => {
    setStatus("Confirmed")
  }
  const delivered = (status) => {
    setStatus("Delivered")
  }
  const refund = (status) => {
    setStatus("Refund")
  }
  const pending = (status) => {
    setStatus("Pending")
  }
  const showAll = () => {
    setStatus('');
  };

  // function to sort by amount
  const sortByAmount = () => {
    const sortedData = [...filteredData];
    
    sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    setFilteredData(sortedData);
    setSortBy('Amount')
  };

  // function to sort by amount
  const sortByPlacedOn = () => {
    const sortedData = [...filteredData];
    sortedData.sort((a, b) => new Date(b.placed_on) - new Date(a.placed_on));
    setFilteredData(sortedData);
    setSortBy('Placed On');
  };

  // setting filter for formatting data for only selected status data
  useEffect(() => {
    const filtered = status ? data.filter((order) => order.status === status) : data;
    setFilteredData(filtered);
  }, [status]);
  
  // trying to edit content
  const [editedOrder, setEditedOrder] = useState(null);
  const saveEditedOrder = () => {
    const orderIndex = filteredData.findIndex((o) => o.id === editedOrder.id);
    if (orderIndex !== -1) {
      const updatedData = [...filteredData];
      updatedData[orderIndex] = editedOrder;
      setFilteredData(updatedData);
      setEditedOrder(null);
    }
  };
  const editOrder = (orderId, brandName, itemName, quantity, amount, status, placedOn) => {
    const orderIndex = filteredData.findIndex((o) => o.id === orderId);
    if (orderIndex !== -1) {
      const editedOrder = {
        ...filteredData[orderIndex],
        brand_name: brandName,
        item: itemName,
        quantity: quantity,
        price: amount,
        status: status,
        placed_on: placedOn
      };
      setEditedOrder(editedOrder);
    }
  };


  return (
    <div>
      <div className='bg-white w-full mt-4 p-6 rounded-2xl shadow-md'>
        <div className='flex justify-between'>
          <p className='font-semibold text-[17px] flex items-center'>{status}<span className='text-[#2F2F2F] text-opacity-40 ml-4'>
            258
          </span></p>
          <button className='bg-[#EFF0F6] font-semibold w-9 h-9 flex rounded-full text-white justify-center items-center '>
            <img src="/icons/minus.png" className='w-4' alt="" />
          </button>
        </div>
        <div className='bg-[#000000] bg-opacity-10 h-[1px] mt-2 w-full'></div>
        <div className='flex justify-between mt-3'>
          <div className='flex items-center text-[#000000] text-opacity-50 font-medium '>
            <img src="/icons/search.png" className='w-5' alt="" />
            <p className='ml-3 text-[14px]'>Search</p>
          </div>
          <div className='flex gap-10 pr-4'>
            <div id='activeOrders' className='flex items-center'>
              {/* popup for status selection data */}
              <Popup
                trigger={
                  <div className='flex bg-[#F3F4F9]  gap-3 rounded-[7px] items-center w-[125px] h-[27px] justify-between px-2 cursor-pointer'>
                    <p className='font-semibold text-[#4F5E74] text-[12px]'>{status}</p>
                    <img src="/icons/up.png" className='w-[18px]' alt="" />
                  </div>
                }>
                <div className='flex flex-col font-inter bg-white p-2 w-[225px] h-[200px] text-[14px] rounded-xl pt-4 gap-4 border-2 shadow-lg pl-4'>
                  <button className='w-full text-left flex items-center'
                    onClick={confirmed}
                  >
                    <div className='w-[20px] mr-3 h-[20px] border-2 border-[#000000] rounded-full border-opacity-30 active:bg-[#4F5E74]'></div>
                    Confirmed
                  </button>
                  <button className='w-full text-left flex items-center'
                    onClick={delivered}
                  >
                    <div className='w-[20px] mr-3 h-[20px] border-2 border-[#000000] rounded-full border-opacity-30 active:bg-[#4F5E74] focus:bg-[#4F5E74]'></div>
                    Delivered
                  </button>
                  <button className='w-full text-left flex items-center'
                    onClick={refund}
                  >
                    <div className='w-[20px] mr-3 h-[20px] border-2 border-[#000000] rounded-full border-opacity-30 active:bg-[#4F5E74] focus:bg-[#4F5E74]'></div>
                    Refund Completed (30d)
                  </button>
                  <button className='w-full text-left flex items-center'
                    onClick={pending}
                  >
                    <div className='w-[20px] mr-3 h-[20px] border-2 border-[#000000] rounded-full border-opacity-30 active:bg-[#4F5E74] focus:bg-[#4F5E74]'></div>
                    Pending
                  </button>
                  <button className='w-full text-left flex items-center'
                    onClick={showAll}
                  >
                    <div className='w-[20px] mr-3 h-[20px] border-2 border-[#000000] rounded-full border-opacity-30 active:bg-[#4F5E74] focus:bg-[#4F5E74]'></div>
                    Show All
                  </button>
                </div>
              </Popup>
              <img src="/icons/updown.png" className='w-[5px] ml-4' alt="" />
            </div>

                {/* sort by amount button */}
            <div id='Amount' className='flex items-center'>
              <button
                onClick={sortByAmount}
                className='flex bg-[#F3F4F9] w-[125px] h-[27px] rounded-[7px] gap-12 items-center justify-center'>
                <p className='font-semibold text-[12px] text-[#4F5E74]'>Amount</p>
                <img src="/icons/down.png" className='h-[7px]' alt="" />
              </button>
              <img src="/icons/updown.png" className='w-[5px] ml-4' alt="" />
            </div>
            {/* sort by Placed on button */}
            <div id='PlacedOn' className='flex items-center'>
              <button
                onClick={sortByPlacedOn}
                className='flex bg-[#F3F4F9] p-2 gap-8 items-center rounded-[7px] w-[125px] h-[27px] justify-center'>
                <p className='font-semibold text-[12px] text-[#4F5E74]'>Placed on</p>
                <img src="/icons/down.png" className='h-[7px]' alt="" />
              </button>
              <img src="/icons/updown.png" className='w-[5px] ml-4' alt="" />
            </div>
            <div id='Options' className='flex items-center'>
              <div className='flex p-2 items-center rounded-xl '>
                <p className='font-semibold text-[14px] text-[#4F5E74]'>Options</p>
              </div>
              <img src="/icons/dropdown.png" className='h-2 ' alt="" />
            </div>
          </div>
        </div>
        {/* objects */}
        <div className="order-list">
          {filteredData.map((order) => {
            const isEditing = editedOrder && editedOrder.id === order.id;
            const orderDetails = isEditing ? editedOrder : order;
            console.log(sortBy, orderDetails, editOrder);
            return (
              <div className="flex mt-4 justify-between" key={order.id}>
                <div className='flex items-center'>
                  <button className='w-[20px] mr-3 h-[20px] border-2 border-[#000000] rounded-full border-opacity-30 focus:bg-[#4F5E74]'></button>
                  <img src={order.logo} className='w-[61px] h-[42px] rounded-xl' alt={order.brand_name} />
                  <div className='flex flex-col ml-4'>
                    <h3 className='font-semibold text-[14px]'>{order.brand_name}</h3>
                    <p className='text-[#000000] text-xs text-opacity-50'> {order.item}</p>
                  </div>
                </div>
                <div className="order-details flex gap-14 text-[14px] text-[#70768C] font-medium items-center mr-10">
                  <p className=' w-[140px] text-center'>{order.quantity}</p>
                  <p className=' w-[140px] text-center'>{order.price}</p>
                  <p className=' w-[140px] text-center'>{order.placed_on}</p>
                  {/* edit content form popup */}
                  <Popup
                    trigger={
                      <button
                        className='cursor-pointer w-[24px] h-[24px]  items-center flex '>
                        <img src="/icons/menu.png" alt="" />
                      </button>
                    }
                    modal nested>
                    {
                      close => (
                        <div className='modal font-inter bg-[#dad9d9] shadow-lg py-10 p-3 rounded-lg '>
                          <div className='text-xl  font-medium'>
                            Edit content
                          </div>
                          <form action="" className='flex flex-col justify-center w-full items-center text-xs '>
                            <div className='flex gap-2'>
                              <div className='flex gap-4 mt-2'>
                                <input
                                  type="text"
                                  className="focus:outline-none bg-[#EFF0F6] rounded-xl p-F2 px-4"
                                  placeholder="Brand Name"
                                  value={editedOrder?.brand_name || ''}
                                  onChange={(e) => setEditedOrder({ ...editedOrder, brand_name: e.target.value })}
                                />
                              </div>
                              <div className='flex gap-4 mt-2'>
                                <input
                                  type="text"
                                  className="focus:outline-none bg-[#EFF0F6] rounded-xl p-2 px-4"
                                  placeholder="Item Name"
                                  value={editedOrder?.item || ''}
                                  onChange={(e) => setEditedOrder({ ...editedOrder, item: e.target.value })}
                                />
                              </div>
                            </div>
                            <div className='flex gap-2'>
                              <div className='flex gap-4 mt-2'>
                                <input
                                  type="text"
                                  className="focus:outline-none bg-[#EFF0F6] rounded-xl p-2 px-4"
                                  placeholder="Quantity"
                                  value={editedOrder?.quantity || ''}
                                  onChange={(e) => setEditedOrder({ ...editedOrder, quantity: e.target.value })}
                                />
                              </div>

                              <div className='flex gap-4 mt-2'>
                                <input
                                  type="text"
                                  className="focus:outline-none bg-[#EFF0F6] rounded-xl p-2 px-4"
                                  placeholder="Amount"
                                  value={editedOrder?.price || ''}
                                  onChange={(e) => setEditedOrder({ ...editedOrder, price: e.target.value })}
                                />
                              </div>
                            </div>
                            <div className='flex gap-2'>
                              <div className='flex gap-4 mt-2'>
                                <input
                                  type="text"
                                  className="focus:outline-none bg-[#EFF0F6] rounded-xl p-2 px-4"
                                  placeholder="Status"
                                  value={editedOrder?.status || ''}
                                  onChange={(e) => setEditedOrder({ ...editedOrder, status: e.target.value })}
                                />
                              </div>
                              <div className='flex gap-4 mt-2'>
                                <input
                                  type="text"
                                  className="focus:outline-none bg-[#EFF0F6] rounded-xl p-2 px-4"
                                  placeholder="Placed on"
                                  value={editedOrder?.placed_on || ''}
                                  onChange={(e) => setEditedOrder({ ...editedOrder, placed_on: e.target.value })}
                                />
                              </div>
                            </div>
                            <button className='w-22 flex bg-[#000000] bg-opacity-10 mt-4 rounded-full  items-center text-md font-medium'
                              type='submit' onClick={saveEditedOrder}
                            >
                              <img src="/icons/checked.png" className='w-7' alt="" />
                              <p className='mx-2'>Submit</p>
                            </button>
                            <button onClick=
                              {() => close()}>
                              <div className='w-7 absolute top-3 right-3 bg-[#000000] bg-opacity-10 p-2 rounded-full'>
                                <img src="/icons/close.png" alt="" />
                              </div>
                            </button>

                          </form>
                        </div>
                      )
                    }

                  </Popup>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Results
