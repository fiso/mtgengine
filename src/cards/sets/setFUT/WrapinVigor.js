"use strict";
const Constants = require ("../../../Constants");
const WrapinVigorBase = require("../setCNS/WrapinVigor");

class WrapinVigor extends WrapinVigorBase {
  constructor (game) {
    super(game, "Wrap in Vigor", "Future Sight", "FUT");
  }
}

module.exports = WrapinVigor;
