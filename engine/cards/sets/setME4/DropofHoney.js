"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DropofHoneyBase = require("../setARN/DropofHoney.js");

class DropofHoney extends DropofHoneyBase {
  constructor(game) {
    super(game, "Drop of Honey", "Masters Edition IV", "ME4");
  }
}

module.exports = DropofHoney;
