"use strict";
const Constants = require ("../../../Constants");
const BramblecrushBase = require("../setISD/Bramblecrush");

class Bramblecrush extends BramblecrushBase {
  constructor(game) {
    super(game, "Bramblecrush", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Bramblecrush;
