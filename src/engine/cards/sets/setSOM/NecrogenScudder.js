"use strict";
const Constants = require ("../../../Constants");
const NecrogenScudderBase = require("../setM15/NecrogenScudder");

class NecrogenScudder extends NecrogenScudderBase {
  constructor (game) {
    super(game, "Necrogen Scudder", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NecrogenScudder;
