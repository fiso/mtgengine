"use strict";
const Constants = require ("../../../Constants");
const CallforUnityBase = require("../setAER/CallforUnity");

class CallforUnity extends CallforUnityBase {
  constructor (game) {
    super(game, "Call for Unity", "Aether Revolt Promos", "PAER");
  }
}

module.exports = CallforUnity;
