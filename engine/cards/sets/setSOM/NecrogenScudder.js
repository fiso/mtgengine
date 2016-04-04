"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecrogenScudderBase = require("../setM15/NecrogenScudder.js");

class NecrogenScudder extends NecrogenScudderBase {
  constructor(game) {
    super(game, "Necrogen Scudder", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NecrogenScudder;
