"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EarthServantBase = require("../setDDI/EarthServant.js");

class EarthServant extends EarthServantBase {
  constructor(game) {
    super(game, "Earth Servant", "Magic 2011", "M11");
  }
}

module.exports = EarthServant;
