"use strict";
const Zone = require("./Zone");
const Constants = require ("../Constants");
const Card = require("../objects/Card");

const BasicMountain = require("../cards/BasicMountain");
const LightningBolt = require("../cards/LightningBolt");
const GoblinBully = require("../cards/GoblinBully");

class Library extends Zone {
  constructor (game, owner) {
    super(game, Constants.zoneTypes.HIDDEN, Constants.zoneOwnership.PLAYER, owner, Constants.zoneIdentifiers.LIBRARY);

    // DEBUG
    for (let i = 0; i < 30; i++) {
      this._objects.push(new BasicMountain(game));
      this._objects.push(new LightningBolt(game));
    }
  }

  drawCard () {
    return this._objects.pop();
  }
}

module.exports = Library;
