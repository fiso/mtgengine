"use strict";
const Constants = require ("../../../Constants");
const DropofHoneyBase = require("../setME4/DropofHoney");

class DropofHoney extends DropofHoneyBase {
  constructor (game) {
    super(game, "Drop of Honey", "Arabian Nights", "ARN");
  }
}

module.exports = DropofHoney;
