"use strict";
const Constants = require ("../../../Constants");
const EarthServantBase = require("../setDDI/EarthServant");

class EarthServant extends EarthServantBase {
  constructor(game) {
    super(game, "Earth Servant", "Magic 2011", "M11");
  }
}

module.exports = EarthServant;
