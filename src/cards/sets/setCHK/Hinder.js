"use strict";
const Constants = require ("../../../Constants");
const HinderBase = require("../setTD0/Hinder");

class Hinder extends HinderBase {
  constructor (game) {
    super(game, "Hinder", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Hinder;
