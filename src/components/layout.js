import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import NavigationMenu from '@/components/NavigationMenu';
import Bookmark from '@/components/Bookmark';

const Layout = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      const mockResponse = [
        {
          id: '1',
          name: 'Category 1',
          applications: [
            { id: 'a1', name: 'App 1', icon: 'https://via.placeholder.com/150', url: 'https://example.com' }
          ],
        },
        {
          id: '2',
          name: 'Category 2',
          applications: [
            { id: 'app2', name: 'App 2', icon: 'https://via.placeholder.com/150', url: 'https://example.com' },
            { id: 'app3', name: 'App 3', icon: 'https://via.placeholder.com/150', url: 'https://example.com' },
            { id: 'app4', name: 'App 4', icon: 'https://via.placeholder.com/150', url: 'https://example.com' }
          ],
        },
        {
          id: '3',
          name: 'Category 3',
          applications: [
            { id: 'app5', name: 'App 5', icon: 'https://via.placeholder.com/150', url: 'https://example.com' },
            { id: 'app6', name: 'App 6', icon: 'https://via.placeholder.com/150', url: 'https://example.com' }
          ],
        },
        {
          id: '4',
          name: 'Category 4',
          applications: [
            { id: 'app7', name: 'App 7', icon: 'https://via.placeholder.com/150', url: 'https://example.com' }
          ],
        }
      ];

      setCategories(mockResponse);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center bg-gray-900">
      {/* Centered Container */}
      <div className="flex flex-col md:flex-row max-w-6xl w-full justify-center">
        {/* Sidebar */}
        <NavigationMenu />

        {/* Main Content */}
        <div className="flex-1 flex flex-col mb-10 bg-gray-900">
          <h2 className="text-2xl text-white mt-8 mb-4 ml-2">Applications</h2>
          {/* App Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="px-2">
                {console.log(category.name)}
                <h3 className="text-xl text-white mb-2">{category.name}</h3>
                <div className="space-y-4">
                  {category.applications.map((app) => (
                    <Card key={app.id} appName={app.name} appIconUrl={app.icon} appLink={app.url} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ... List Bookmarks */}
          <h2 className="text-2xl text-white mt-16 ml-2 mb-4">Bookmarks</h2>
          <Bookmark />
          <Bookmark />
          <Bookmark />
        </div>
      </div>
    </div>
  );
};

export default Layout;
