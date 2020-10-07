/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Box, Heading, Text} from 'grommet';
import Avatar from './Avatar';
import Link from 'next/link';
import ConfigContext from './ConfigContext';
import {PostBox} from './Post';
import {useRouter} from 'next/router';

function Header({gitHub, adminLinks}) {
  const {config} = React.useContext(ConfigContext);
  const {pathname} = useRouter();

  return (
    <>
      <Box margin="medium" style={{position: 'absolute', top: 0, right: 0}}>
        <Avatar gitHub={gitHub} adminLinks={adminLinks} />
      </Box>
      <PostBox>
        <Box
          direction="row"
          align="baseline"
          justify="between"
          pad={{horizontal: 'medium', bottom: 'medium'}}
          wrap={true}
          border={{
            size: 'xsmall',
            side: 'bottom',
            color: 'rgba(0,0,0,0.1)',
          }}>
          <Heading style={{margin: 0}} level={2}>
            <Link href="/">
              <a
                style={
                  pathname === '/'
                    ? {
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'auto',
                      }
                    : {color: 'inherit'}
                }>
                {config.title || 'OneBlog'}
              </a>
            </Link>
          </Heading>

          <a href="https://onegraph.com">
            <Text size="small">Learn more about OneGraph</Text>
          </a>
        </Box>
      </PostBox>
    </>
  );
}

export default Header;
