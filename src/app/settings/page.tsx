import React, { FC } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import OverviewForm from '@/components/forms/OverviewForm';
import SocialMediaForm from '@/components/forms/SocialMediaForm';
import TeamForm from '@/components/forms/TeamForm';


interface SettingsPageProps {
  
}

const SettingsPage: FC<SettingsPageProps> = ({  }) => {
  return (
    <div>
      <div className="font-semibold text-3xl mb-5">Settings</div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
            <div>
                <OverviewForm />
            </div>
        </TabsContent>
        <TabsContent value="socialLinks">
          <div>
            <SocialMediaForm />
          </div>
        </TabsContent>
        <TabsContent value="teams">
          <div>
            <TeamForm />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default SettingsPage;