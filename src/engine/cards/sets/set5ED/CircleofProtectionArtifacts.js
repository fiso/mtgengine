'use strict';
const Constants = require('../../../Constants');
const CircleofProtectionArtifactsBase = require('../set5DN/CircleofProtectionArtifacts');

class CircleofProtectionArtifacts extends CircleofProtectionArtifactsBase {
  constructor (game) {
    super(game, 'Circle of Protection: Artifacts', 'Fifth Edition', '5ED');
  }
}

module.exports = CircleofProtectionArtifacts;
