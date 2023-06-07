import './App.css';
import Results from './components/results';

function App() {
  return (
    <div className=" bg-[#F5F5F5] w-[100vw] h-[125vh] font-inter overflow-scroll scrollbar-none">
      {/* sidebar */}
      <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-[15%] h-screen transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
        <div class="h-full  py-4 overflow-y-auto bg-white rounded-3xl ml-3 shadow-lg">
          <div class=" font-medium flex flex-col items-center w-full justify-center">
            <div className='w-full flex justify-center my-4 mb-14 cursor-pointer'>
              <img src="/icons/zag.png" className='w-20' alt="" />
            </div>
            <div>
              <div class="flex items-center w-[193px] h-[46px] justify-center rounded-lg hover:bg-[#1B59F8] hover:bg-opacity-10 text-black hover:text-[#1B59F8] cursor-pointer px-5">
                <img src="/icons/reports.png" className='w-6' alt="" />
                <span class="flex-1 ml-3 text-[14px]">Reports</span>
              </div>
            </div>
            <div>
              <div class="flex items-center w-[193px] my-4 h-[46px] rounded-lg hover:bg-[#1B59F8] hover:bg-opacity-10 text-black hover:text-[#1B59F8] cursor-pointer px-5">
                <img src="/icons/workspaces.png" className='w-6' alt="" />
                <span class="flex-1 ml-3 text-[14px] ">Workspaces</span>
              </div>
            </div>
            <div>
              <div class="flex items-center w-[193px] h-[46px] rounded-lg hover:bg-[#1B59F8] hover:bg-opacity-10 text-black hover:text-[#1B59F8] cursor-pointer px-5">
                <img src="/icons/settings.png" className='w-6' alt="" />
                <span class="flex-1 ml-3 text-[14px] ">Settings</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* sidebar end */}
      {/* main content */}
      <div className='absolute left-[15%] w-[85%] p-8 pr-16'>
        <div className='flex justify-between'>
          <p className='font-bold text-2xl'>Orders</p>
          <button className='flex gap-2 bg-[#1B59F8] font-semibold w-[128px] h-[40px] rounded-xl text-sm text-white justify-center items-center '>
            <img src="/icons/plus.png" className='w-5' alt="" />
            Add Order
          </button>
        </div>
        <div className='bg-[#000000] bg-opacity-10  h-[1px] mt-5 w-full'></div>
        <Results/>
        {/* issues */}
        <div className='bg-white mt-6 p-6 rounded-xl shadow-md'>
          <div className='flex justify-between'>
            <p className='font-semibold text-[17px] flex items-center'>Issues<span className='text-[#2F2F2F] text-opacity-40 ml-4'>
              21
            </span></p>
            <button className='bg-[#EFF0F6] font-semibold w-9 h-9 flex rounded-full text-white justify-center items-center '>
              <img src="/icons/plusdark.png" className='w-4' alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
