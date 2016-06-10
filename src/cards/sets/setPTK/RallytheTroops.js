"use strict";
const Constants = require ("../../../Constants");
const RallytheTroopsBase = require("../setPO2/RallytheTroops");

class RallytheTroops extends RallytheTroopsBase {
  constructor (game) {
    super(game, "Rally the Troops", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RallytheTroops;
