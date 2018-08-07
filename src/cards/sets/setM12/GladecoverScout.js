"use strict";
const Constants = require ("../../../Constants");
const GladecoverScoutBase = require("../setM14/GladecoverScout");

class GladecoverScout extends GladecoverScoutBase {
  constructor (game) {
    super(game, "Gladecover Scout", "Magic 2012", "M12");
  }
}

module.exports = GladecoverScout;
