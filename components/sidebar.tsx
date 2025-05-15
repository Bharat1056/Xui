import React from 'react';
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"]
})

interface SubHeading {
  id: string;
  title: string;
  onClick?: () => void;
}

interface MainHeading {
  id: string;
  title: string;
  subHeadings?: SubHeading[];
  onClick?: () => void;
}

interface SidebarProps {
  items: MainHeading[];
  className?: string;
  activeItemId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  items,
  className = '',
  activeItemId,
}) => {
  return (
    <div className={`max-h-full overflow-y-auto w-60 border px-4 py-1 ${className}`}>
      <nav>
        <ul className="space-y-2">
          {items.map((mainItem) => (
            <li key={mainItem.id} className="mb-2">
              <div
                className={`font-medium text-base cursor-pointer py-2 px-3 rounded-md ${dmSans.className} antialiased`}
              >
                {mainItem.title}
              </div>
              
              {mainItem.subHeadings && mainItem.subHeadings.length > 0 && (
                <ul className="mt-1 ml-4 space-y-1">
                  {mainItem.subHeadings.map((subItem) => (
                    <li key={subItem.id}>
                      <div
                        className={`text-sm cursor-pointer py-1.5 px-3 rounded-md text-white hover:bg-[#27272a]  ${
                          activeItemId === subItem.id ? 'bg-[#27272a]': 'bg-transparent'
                        } ${dmSans.className} antialiased`}
                        onClick={subItem.onClick}
                      >
                        {subItem.title}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;