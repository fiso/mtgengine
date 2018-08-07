"use strict";
const Constants = require ("../../../Constants");
const StromkirkCaptainBase = require("../setC17/StromkirkCaptain");

class StromkirkCaptain extends StromkirkCaptainBase {
  constructor (game) {
    super(game, "Stromkirk Captain", "Dark Ascension", "DKA");
  }
}

module.exports = StromkirkCaptain;
