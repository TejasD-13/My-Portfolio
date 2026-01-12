import React from 'react';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background selection:bg-primary selection:text-black">
            {/* Desktop Layout */}
            <div className="hidden lg:block h-screen p-8">
  <div className="max-w-[1400px] mx-auto flex gap-8 h-full">

    {/* Fixed Sidebar */}
    <div className="w-[340px] shrink-0 h-full">
      <Sidebar />
    </div>

    {/* Scrollable Content */}
    <div className="flex-1 bg-surface rounded-[20px] border border-[#383838] relative h-full overflow-hidden">
      <div className="h-full overflow-y-auto p-8">
        {children}
      </div>
    </div>

  </div>
</div>


            {/* Mobile Layout */}
            <div className="lg:hidden min-h-screen pb-20">
                {/* Mobile Sidebar */}
                <div className="p-4">
                    <Sidebar />
                </div>

                {/* Mobile Main Content */}
                <div className="p-4 pt-0">
                    <div className="bg-surface rounded-[20px] border border-[#383838] p-6 min-h-[60vh]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
