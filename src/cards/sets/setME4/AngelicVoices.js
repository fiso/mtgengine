"use strict";
const Constants = require ("../../../Constants");
const AngelicVoicesBase = require("../setCHR/AngelicVoices");

class AngelicVoices extends AngelicVoicesBase {
  constructor (game) {
    super(game, "Angelic Voices", "Masters Edition IV", "ME4");
  }
}

module.exports = AngelicVoices;
