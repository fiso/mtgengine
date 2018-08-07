"use strict";
const Constants = require ("../../../Constants");
const SerraAdvocateBase = require("../setDVD/SerraAdvocate");

class SerraAdvocate extends SerraAdvocateBase {
  constructor (game) {
    super(game, "Serra Advocate", "Urza's Destiny", "UDS");
  }
}

module.exports = SerraAdvocate;
