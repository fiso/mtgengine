"use strict";
const Constants = require ("../../../Constants");
const BalduvianBearsBase = require("../setDKM/BalduvianBears");

class BalduvianBears extends BalduvianBearsBase {
  constructor(game) {
    super(game, "Balduvian Bears", "Ice Age", "ICE");
  }
}

module.exports = BalduvianBears;
