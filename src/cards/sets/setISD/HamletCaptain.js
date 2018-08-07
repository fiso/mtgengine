"use strict";
const Constants = require ("../../../Constants");
const HamletCaptainBase = require("../setEMN/HamletCaptain");

class HamletCaptain extends HamletCaptainBase {
  constructor (game) {
    super(game, "Hamlet Captain", "Innistrad", "ISD");
  }
}

module.exports = HamletCaptain;
