'use strict';
const Constants = require('../../../Constants');
const WarpArtifactBase = require('../setME4/WarpArtifact');

class WarpArtifact extends WarpArtifactBase {
  constructor (game) {
    super(game, 'Warp Artifact', 'Fourth Edition', '4ED');
  }
}

module.exports = WarpArtifact;
