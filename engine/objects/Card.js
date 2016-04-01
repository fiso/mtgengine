"use strict";
const _ = require("underscore");
const MTGObject = require("./MTGObject");
const Constants = require("../Constants");
const assert = require("assert");

class Card extends MTGObject {
  constructor (game, callback, name, set) {
    super(game);
    if (new.target === Card) {
      throw new TypeError("Card is not to be used directly");
    }
    this._name = name;
    this._superTypes = [];
    this._types = [];
    this._subTypes = [];
    this._abilities = [];
    this._imageUrl = "";

    this._game._cardApi.getCard(name, set).then((card) => {
      assert(card.name === name);
      this._name = card.name;
      this._imageUrl = card.printing.image_url;
      if (this._imageUrl.indexOf("id/0.jpg") !== -1) {
        console.log(`${name} has no valid image`);
      }
      if (card.supertypes) {
        this._superTypes = _.map(card.supertypes, function (superType) {
          return Constants.cardSuperTypes[superType.toUpperCase()] ?
                 Constants.cardSuperTypes[superType.toUpperCase()] :
                 superType.toUpperCase();
        });
      }
      if (card.types) {
        this._types = _.map(card.types, function (type) {
          return Constants.cardTypes[type.toUpperCase()] ?
                 Constants.cardTypes[type.toUpperCase()] :
                 type.toUpperCase();
        });
      }
      if (card.subtypes) {
        this._subTypes = _.map(card.subtypes, function (subtype) {
          return subtype.toUpperCase();
        });
      }

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
