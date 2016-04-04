"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalduvianBearsBase = require("../setDKM/BalduvianBears.js");

class BalduvianBears extends BalduvianBearsBase {
  constructor(game) {
    super(game, "Balduvian Bears", "Ice Age", "ICE");
  }
}

module.exports = BalduvianBears;
