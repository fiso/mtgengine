"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrindleBoarBase = require("../setM11/BrindleBoar.js");

class BrindleBoar extends BrindleBoarBase {
  constructor(game) {
    super(game, "Brindle Boar", "Magic 2012", "M12");
  }
}

module.exports = BrindleBoar;
