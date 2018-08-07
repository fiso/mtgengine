"use strict";
const Constants = require ("../../../Constants");
const AngelicVoicesBase = require("../setME4/AngelicVoices");

class AngelicVoices extends AngelicVoicesBase {
  constructor (game) {
    super(game, "Angelic Voices", "Chronicles", "CHR");
  }
}

module.exports = AngelicVoices;
