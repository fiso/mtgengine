"use strict";
const Constants = require ("../../../Constants");
const DiregrafCaptainBase = require("../setDDQ/DiregrafCaptain");

class DiregrafCaptain extends DiregrafCaptainBase {
  constructor (game) {
    super(game, "Diregraf Captain", "Dark Ascension", "DKA");
  }
}

module.exports = DiregrafCaptain;
