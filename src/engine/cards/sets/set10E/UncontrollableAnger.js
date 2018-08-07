"use strict";
const Constants = require ("../../../Constants");
const UncontrollableAngerBase = require("../setCNS/UncontrollableAnger");

class UncontrollableAnger extends UncontrollableAngerBase {
  constructor (game) {
    super(game, "Uncontrollable Anger", "Tenth Edition", "10E");
  }
}

module.exports = UncontrollableAnger;
