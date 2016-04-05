"use strict";
const Constants = require ("../../../Constants");
const GladecoverScoutBase = require("../setM12/GladecoverScout");

class GladecoverScout extends GladecoverScoutBase {
  constructor(game) {
    super(game, "Gladecover Scout", "Magic 2014 Core Set", "M14");
  }
}

module.exports = GladecoverScout;
