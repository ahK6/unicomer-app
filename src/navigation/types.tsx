import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomePanelParamList = {
  PanelNavigation: undefined;
  HomePanel: undefined;
  SearchCustomerScreen: undefined;
  SearchCustomerResultsScreen: {keyword: string; searchType: string};
  AllCustomersScreen: undefined;
};

export type SearchCustomerScreenProps = NativeStackNavigationProp<
  HomePanelParamList,
  'SearchCustomerScreen'
>;

export type SearchCustomerResultsScreenProps = NativeStackNavigationProp<
  HomePanelParamList,
  'SearchCustomerResultsScreen'
>;

export type AllCustomersScreenScreenProps = NativeStackNavigationProp<
  HomePanelParamList,
  'AllCustomersScreen'
>;
