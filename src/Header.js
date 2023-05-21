import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="logo">
      <img src="https://img.icons8.com/color/48/google-docs--v1.png" alt="google-docs--v1"/>
        <h1>Google Docs</h1>
      </div>
      <nav>
        <ul>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Insert</li>
          <li>Format</li>
          <li>Tools</li>
          <li>Add-ons</li>
        </ul>
      </nav>
      <div className='share'>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAk1BMVEX///8Ag80Ad8bB3OsAg8sAf8z+//13rNp3rdkAgMv39/cAg8////oAfMfF3uzY7fHc6/DR5+672OsAe81Qmckpisl7sNYAc8bq9vrr8vXj8PRFndGZwt7G4+3s9vVsqtSszugZgsESis+t0eMYktRno9Q6k89coNhMmdKSvt+GuNdAlMkmjMRJltWaxdwAcrwAdbmWl7J3AAADPElEQVRoge2Xa5eiOBBAK7GSmRiCYAxg2gaNDT76Mf3/f90GtXt3nDmnFZ2dL3WPx0AQbizyqAAQBEEQBEEQBEEQBEEQBEHciIyfLB3dTJrJw8OuYDJTht+MUbPJdX85NwIZY8gQT1+DSoaC51eJHbsXyl3jnfK7iZFPL9ZKKMT5/UIhDjOL4uLuJeHbL2L1wAeaxfdbxLqsFkbpIeorxPBbsXx09n8X614MdWOZPlZ8tkAYrf+YGIUSZR1fgVyq0wUtTKwWKL4V7I+JhV19n+ZJLwbvRBSh5k1eZ8uVEDX0P8WAv3THW8WqbB4/qvsHNGWcj0wB9dpDKowHJRR7ck8ujjcUGmOzlIrTnrpRzB/qs2sjJbSagLHlBFrrgXcbfHKr4Dbb3heC7QJat+m4GiyOIV18ri7j8aFIYL5V2sOMW4UsikcykRsX1n1EWmEgX0NjF/GmiVN6oFjj4t+6k1jC2qHagcz3He9DnRdTSPkD5K6RWWlgnOTPhRy5PUwPw2+IWLTJxz3jIyDnDQ8rXBUekvFCWC+d6mpvXmYv7tmPOYJsrMnBYVnVYWCoBfpDShB9sQG9N0nyF42r2IkZzt7GScu9NKGbZwZ3WT0fz6PYKxU8VHUlk60aJrZNP4SmzfZ12+7rXiwXq4DBoZttMfx4k+vSJ8Z1c/8jBrZt/ZzHdyzQVdA0TdvisFBrOwKYOy4EU1j6sZR+E62BhfAC8t2ahXxTcThhV2c8TTrR1b04ixHJ5WtpdruBvRqZBwjHNekwZfYDKZ5ppfgaquVaJh33gNhJXy4hKzKY83fI4nwWh/kuhbUaJo6dBgqL+iiOx+UhozlkNeWiAvn4bG1aKRHylPMU5HKasfdqJBjaooJqYfUwsXiV3nwsCvzR/TQpWmGMUUwbE1sYv+LBu1Fx5ewrYlCMEkfvIDHs7cmjWWA/r4l4lhfElyCOwTm7PCDUr75TH0sPfrEGsfPV8fN8wHByKR+YZ/2XAakP7s3fEevwVXzvLj6kt/qrpOZC8eXpbUzoyzvE+Mg1CX3Eqa8feRnXbWEg58dN24FTMaC8ftN2p20qv3ab+hc35gRBEARBEARBEARBEARBEL/hH1jvPSW8IKC+AAAAAElFTkSuQmCC' alt='share'></img>
        </div>
    </header>
  );
};

export default Header;
