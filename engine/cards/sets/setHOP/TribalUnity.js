"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TribalUnityBase = require("../setONS/TribalUnity.js");

class TribalUnity extends TribalUnityBase {
  constructor(game) {
    super(game, "Tribal Unity", "Planechase", "HOP");
  }
}

module.exports = TribalUnity;
