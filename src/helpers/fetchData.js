import { useState, useEffect } from 'react';
import axios from 'axios';

export default fetchData = async (endpoint) => {
  const res = await axios(`https://jsonplaceholder.typicode.com/${endpoint}`);

  return res;
};
