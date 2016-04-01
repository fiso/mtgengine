"use strict";
const MTGObject = require("./MTGObject");
const Constants = require("../Constants");

class Card extends MTGObject {
  constructor (game, callback, name, set, superTypes, types, subTypes, imageUrl) {
    super(game);
    if (new.target === Card) {
      throw new TypeError("Card is not to be used directly");
    }
    this._name = name;
    this._superTypes = superTypes ? superTypes.slice() : [];
    this._types = types ? types.slice() : [];
    this._subTypes = subTypes ? subTypes.slice() : [];
    this._abilities = [];
    this._imageUrl = imageUrl;

    this._game._cardApi.getCard(name, set).then((card) => {
      this._name = card.name;
      //this._superTypes = superTypes ? superTypes.slice() : [];
      //this._types = types ? types.slice() : [];
      //this._subTypes = subTypes ? subTypes.slice() : [];
      this._imageUrl = card.printing.image_url;

      if (callback) {
        callback(this);
      }
    });
  }

  isBasicLand () {
    if (this._superTypes.indexOf(Constants.cardSuperTypes.BASIC) === -1) {
      return false;
    }

    if (this._types.indexOf(Constants.cardTypes.LAND) === -1) {
      return false;
    }

    return true;
  }

  hasType (type) {
    return this._types.indexOf(type) !== -1;
  }

  resolve () {
    this._game.log("Card resolves");
  }

  get cost () {
    return {};
  }

  placeInZone (zone) {
    this._zone = zone;
  }

  getCurrentZone () {
    return this._zone;
  }

  addAbility (cost, abilityCallback, isManaAbility) {
    this._abilities.push({
      cost: cost,
      abilityCallback: abilityCallback,
      isManaAbility: isManaAbility
    });
  }
}

module.exports = Card;
