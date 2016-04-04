"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreenweaverDruidBase = require("../setDPA/GreenweaverDruid.js");

class GreenweaverDruid extends GreenweaverDruidBase {
  constructor(game) {
    super(game, "Greenweaver Druid", "Zendikar", "ZEN");
  }
}

module.exports = GreenweaverDruid;
