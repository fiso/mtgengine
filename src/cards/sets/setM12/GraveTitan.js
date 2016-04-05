"use strict";
const Constants = require ("../../../Constants");
const GraveTitanBase = require("../setC14/GraveTitan");

class GraveTitan extends GraveTitanBase {
  constructor(game) {
    super(game, "Grave Titan", "Magic 2012", "M12");
  }
}

module.exports = GraveTitan;
