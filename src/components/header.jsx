import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';
import { PenBox } from 'lucide-react';



const Header = () => {

  const [ShowSignIn, setShowSignIn] = useState(false);

  const [ search,setSearch]=useSearchParams();
  useEffect(() => {
    if(search.get("sign-in")){
      setShowSignIn(true);
    }
  }, [search]);
  

  const handleOverlayClick = (e) => {
    if(e.target === e.currentTarget){
    setShowSignIn(false);
    setSearch({})
  }
};

  return (
    <header className="container mx-auto px-4 sm:px-8 lg:px-16">


      <nav className='py-4 flex justify-between items-center'>
        <Link to="/">
          <img src="/logo.png" className="h-20" alt="Logo" />
        </Link>

        <div className="flex  gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>

          <SignedIn>
            {/* Add a condition here */}
            <Button variant="destructive" className="rounded-full ">
              <PenBox size={20} className="mr-2" />
              Post a Job
            </Button>
            <Link to="/post-job"></Link>
           <UserButton appearance={{
            elements :{
              avatarBox:"w-10 h-10",
            }
           }}
           >
            {/* <UserButton.MenuItems> */}

            </UserButton >
          </SignedIn>
        </div>


      </nav>
    
    { ShowSignIn && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}>

      <SignIn
      signUpForceRedirectUrl="/onboarding"
      fallbackRedirectUrl="/onboarding"
      />
      </div>) }
      </header>
  );
};


export default Header;
