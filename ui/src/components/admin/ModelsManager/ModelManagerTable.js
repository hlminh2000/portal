import React from 'react';

import ModelManagerProvider, { ModelManagerContext } from './ModelManagerController';
import { Toolbar, DataTable } from '../AdminTable';
import { ModelTableColumns } from './ModelColumns';
import config from '../config';

import { Col } from 'theme/system';

const type = 'Models';

export default () => (
  <ModelManagerProvider baseUrl={`${config.urls.cmsBase}/Model`}>
    <ModelManagerContext.Consumer>
      {({ state, onPageChange, onPageSizeChange, onFilterValueChange }) => (
        <Col>
          <Toolbar {...{ state, type, onFilterValueChange }} />
          <DataTable
            {...{ state, tableColumns: ModelTableColumns, onPageChange, onPageSizeChange }}
          />
        </Col>
      )}
    </ModelManagerContext.Consumer>
  </ModelManagerProvider>
);
