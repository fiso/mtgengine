"use strict";
const Constants = require ("../../../Constants");
const CallerofGalesBase = require("../setCN2/CallerofGales");

class CallerofGales extends CallerofGalesBase {
  constructor (game) {
    super(game, "Caller of Gales", "Zendikar", "ZEN");
  }
}

module.exports = CallerofGales;
