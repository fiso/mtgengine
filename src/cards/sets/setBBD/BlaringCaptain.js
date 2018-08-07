"use strict";
const Constants = require ("../../../Constants");
const BlaringCaptainBase = require("../setPBBD/BlaringCaptain");

class BlaringCaptain extends BlaringCaptainBase {
  constructor (game) {
    super(game, "Blaring Captain", "Battlebond", "BBD");
  }
}

module.exports = BlaringCaptain;
