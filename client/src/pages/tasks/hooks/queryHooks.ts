import { useQuery, useMutation } from '@tanstack/react-query';
import Services from './services';
import { ErrorObj } from 'utils/types';
import { AxiosError, AxiosResponse } from 'axios';
import { useToast } from '@chakra-ui/react';

export const useGetAllTasks = (payload: TFormValues) => {
  return useQuery<DefaultData, ErrorObj>(['allTasks', payload], () =>
    Services.getAllTasks(payload)
  );
};

export const useGetAllAssignedTasks = (payload: TFormValues) => {
  return useQuery<DefaultData, ErrorObj>(['allAssignedTasks', payload], () =>
    Services.getAllAssignedTasks(payload)
  );
};

export const useCreateTask = () => {
  const toast = useToast();
  return useMutation(Services.createTask, {
    onError: (data: AxiosError) => {
      console.log(data, 'failed');
      toast({
        title: 'Invalid Details',
        description: 'Please enter valid inputs',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    },
    onSuccess: (data: AxiosResponse) => {
      console.log(data, 'success');
      toast({
        title: 'Task Created',
        description: 'Task created successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    },
  });
};
