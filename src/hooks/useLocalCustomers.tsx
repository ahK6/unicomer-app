import {useState} from 'react';
import {usersData} from '../constants/data';
import {CustomerTypes} from './types';

const useLocalCustomers = () => {
  const [customers, setCustomers] = useState<CustomerTypes[]>(usersData);
  const [searchResults, setSearchResults] = useState<{}[]>([]);

  const serchCustomer = (searchType: string, keyword: string) => {
    let result: {}[] = [];

    switch (searchType) {
      case '1':
        result = customers.filter((item: any) =>
          `${item.firstName} ${item.lastName}`
            .toLowerCase()
            .includes(keyword.toLowerCase()),
        );
        break;
      case '2':
        result = customers.filter((item: any) =>
          `${item.birthday}`.includes(keyword),
        );
        break;

      case '3':
        result = customers.filter((item: any) =>
          `${item.cellphone}`.includes(keyword),
        );
        break;

      case '4':
        result = customers.filter((item: any) =>
          `${item.city}`.toLowerCase().includes(keyword.toLowerCase()),
        );
        break;
      case '5':
        result = customers.filter((item: any) =>
          `${item.address}`.toLowerCase().includes(keyword.toLowerCase()),
        );
        break;
      case '6':
        result = customers.filter((item: any) =>
          `${item.profession}`.toLowerCase().includes(keyword.toLowerCase()),
        );
        break;
      case '7':
        result = customers.filter((item: any) =>
          `${item.incomes}`.includes(keyword),
        );
        break;
    }
    setSearchResults(result);
  };

  return [serchCustomer, searchResults, customers] as const;
};

export default useLocalCustomers;
