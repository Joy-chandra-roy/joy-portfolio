import { Tabs, TabsList, TabsTrigger, } from "@/components/ui/tabs";


const LanguageSwitcher  = () => {
  return (
    <div>
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">বাংলা</TabsTrigger>
          <TabsTrigger value="settings">
            English
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default LanguageSwitcher ;
