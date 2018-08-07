"use strict";
const Constants = require ("../../../Constants");
const GreenweaverDruidBase = require("../setDPA/GreenweaverDruid");

class GreenweaverDruid extends GreenweaverDruidBase {
  constructor (game) {
    super(game, "Greenweaver Druid", "Zendikar", "ZEN");
  }
}

module.exports = GreenweaverDruid;
