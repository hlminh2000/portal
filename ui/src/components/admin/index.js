import React from 'react';
import { Route } from 'react-router-dom';

import { NotificationsProvider } from './Notifications';

import AdminNav from './AdminNav';
import ModelsManager from './ModelsManager';
import UsersManager from './UsersManager';
import { ModelSingle } from './Model';

import { Col } from 'theme/system';
import { AdminMain } from 'theme/adminStyles';
import { LoggedInUserProvider } from '@hcmi-portal/ui/src/components/admin/services/LoggedInUser';

export default ({ location }) => (
  <NotificationsProvider>
    <LoggedInUserProvider>
      <Col>
        <AdminNav location={location} />
        <AdminMain>
          <Route exact path="/admin" component={ModelsManager} />
          <Route exact path="/admin/model/:name?" component={ModelSingle} />
          <Route exact path="/admin/manage-users" component={UsersManager} />
        </AdminMain>
      </Col>
    </LoggedInUserProvider>
  </NotificationsProvider>
);
