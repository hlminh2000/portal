import React from 'react';

import { Row } from 'theme/system';
import ModelCarousel from 'components/ModelCarousel';
import ArrowLeftIcon from 'icons/ArrowLeftIcon';
import Url from 'components/Url';
import BackToSearch from 'components/links/BackToSearch';
import ModelList from 'components/ModelList';

export default ({ name }) => (
  <Url
    render={({ sqon, history }) => (
      <Row
        className="model-bar"
        css={`
          align-items: center;
          justify-content: space-between;
        `}
      >
        <h2>Model {name}</h2>

        {sqon && <ModelCarousel modelName={name} sqon={sqon} />}

        <div className="model-bar-actions">
          <BackToSearch sqon={sqon} history={history}>
            <ArrowLeftIcon /> BACK TO SEARCH
          </BackToSearch>
          <ModelList className="model-bar-model-list" />
        </div>
      </Row>
    )}
  />
);
