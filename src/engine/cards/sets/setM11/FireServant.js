"use strict";
const Constants = require ("../../../Constants");
const FireServantBase = require("../setPD2/FireServant");

class FireServant extends FireServantBase {
  constructor (game) {
    super(game, "Fire Servant", "Magic 2011", "M11");
  }
}

module.exports = FireServant;
