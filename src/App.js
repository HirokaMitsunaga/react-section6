import React from 'react';
import './style.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SerachInput } from './components/molecules/SerachInput';
import { UserCard } from './components/organisms/user/UserCard';
import { UserIconWithName } from './components/molecules/user/UserIconWithName';

const user = {
  name: 'test',
  image:
    'https://source.unsplash.com/yellow-labrador-retriever-biting-yellow-tulip-flower-Sg3XwuEpybU',
  email: 'test@test.com',
  phone: '000-9999-2222',
  company: {
    name: 'テスト株式会社',
  },
  website: 'https://www.google.co.jp/',
};
export default function App() {
  return (
    <div>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SerachInput />
      <UserIconWithName user={user} />
      <UserCard user={user} />
    </div>
  );
}
