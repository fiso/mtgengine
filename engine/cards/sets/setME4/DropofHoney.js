"use strict";
const Constants = require ("../../../Constants");
const DropofHoneyBase = require("../setARN/DropofHoney");

class DropofHoney extends DropofHoneyBase {
  constructor(game) {
    super(game, "Drop of Honey", "Masters Edition IV", "ME4");
  }
}

module.exports = DropofHoney;
